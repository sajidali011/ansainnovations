<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\ServiceImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    public function index(): Response
    {
        $services = Service::orderBy('sort_order')->orderBy('title')->get([
            'id', 'title', 'slug', 'category', 'is_active', 'sort_order', 'hero_image',
        ]);

        return Inertia::render('admin/services/Index', [
            'services' => $services,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/services/Create');
    }

    public function store(Request $request)
    {
        $data = $this->validateService($request);

        $data['slug'] = Service::generateUniqueSlug($data['title']);

        if ($request->hasFile('hero_image')) {
            $data['hero_image'] = $request->file('hero_image')->store('services/hero', 'public');
        } else {
            unset($data['hero_image']);
        }

        unset($data['gallery_images'], $data['gallery_alt_texts'], $data['gallery_tags']);

        $service = Service::create($data);

        $this->syncGalleryImages($request, $service);

        return redirect()
            ->route('admin.services.index')
            ->with('success', 'Service created successfully.');
    }

    public function edit(Service $service): Response
    {
        $service->load('images');

        return Inertia::render('admin/services/Edit', [
            'service' => $service,
        ]);
    }

    public function update(Request $request, Service $service)
    {
        $data = $this->validateService($request, $service->id);

        if ($data['title'] !== $service->title) {
            $data['slug'] = Service::generateUniqueSlug($data['title'], $service->id);
        }

        if ($request->hasFile('hero_image')) {
            if ($service->hero_image) {
                Storage::disk('public')->delete($service->hero_image);
            }
            $data['hero_image'] = $request->file('hero_image')->store('services/hero', 'public');
        } else {
            unset($data['hero_image']); // keep existing image if no new file uploaded
        }

        unset($data['gallery_images'], $data['gallery_alt_texts'], $data['gallery_tags']);

        $service->update($data);

        $this->syncGalleryImages($request, $service);

        return redirect()
            ->route('admin.services.index')
            ->with('success', 'Service updated successfully.');
    }

    public function destroy(Service $service)
    {
        if ($service->hero_image) {
            Storage::disk('public')->delete($service->hero_image);
        }

        foreach ($service->images as $image) {
            Storage::disk('public')->delete($image->image_path);
        }

        $service->delete(); // service_images rows auto-delete via cascadeOnDelete()

        return redirect()
            ->route('admin.services.index')
            ->with('success', 'Service deleted successfully.');
    }

    /** Show/hide a whole service on the website without deleting it. */
    public function toggleActive(Service $service)
    {
        $service->update(['is_active' => ! $service->is_active]);

        return back()->with('success', 'Status updated.');
    }

    /** Show/hide a single gallery image. */
    public function toggleImage(ServiceImage $image)
    {
        $image->update(['is_visible' => ! $image->is_visible]);

        return back()->with('success', 'Image visibility updated.');
    }

    public function destroyImage(ServiceImage $image)
    {
        Storage::disk('public')->delete($image->image_path);
        $image->delete();

        return back()->with('success', 'Image deleted.');
    }

    private function validateService(Request $request, ?int $ignoreId = null): array
    {
        return $request->validate([
            'category' => ['nullable', 'string', 'max:100'],
            'title' => ['required', 'string', 'max:255'],
            'short_description' => ['nullable', 'string', 'max:500'],
            'content' => ['nullable', 'string'],

            'breadcrumb_label' => ['nullable', 'string', 'max:255'],
            'hero_heading' => ['nullable', 'string', 'max:255'],
            'hero_subheading' => ['nullable', 'string'],
            'hero_image' => ['nullable', 'image', 'max:4096'],
            'hero_image_alt' => ['nullable', 'string', 'max:255'],

            'offerings' => ['nullable', 'array'],
            'offerings.*.title' => ['required_with:offerings', 'string', 'max:255'],
            'offerings.*.description' => ['nullable', 'string'],
            'offerings.*.icon' => ['nullable', 'string', 'max:100'],

            'tools' => ['nullable', 'array'],
            'tools.*.name' => ['required_with:tools', 'string', 'max:255'],
            'tools.*.description' => ['nullable', 'string', 'max:255'],
            'tools.*.icon' => ['nullable', 'string', 'max:100'],

            'process_steps' => ['nullable', 'array'],
            'process_steps.*.title' => ['required_with:process_steps', 'string', 'max:255'],
            'process_steps.*.description' => ['nullable', 'string'],

            'faqs' => ['nullable', 'array'],
            'faqs.*.question' => ['required_with:faqs', 'string', 'max:255'],
            'faqs.*.answer' => ['nullable', 'string'],

            'tags' => ['nullable', 'array'],
            'tags.*' => ['string', 'max:100'],

            'cta_heading' => ['nullable', 'string', 'max:255'],
            'cta_button_text' => ['nullable', 'string', 'max:100'],

            'meta_title' => ['nullable', 'string', 'max:255'],
            'meta_description' => ['nullable', 'string', 'max:500'],
            'meta_keywords' => ['nullable', 'string', 'max:500'],

            'sort_order' => ['nullable', 'integer'],
            'is_active' => ['nullable', 'boolean'],

            'gallery_images' => ['nullable', 'array'],
            'gallery_images.*' => ['image', 'max:4096'],
            'gallery_alt_texts' => ['nullable', 'array'],
            'gallery_alt_texts.*' => ['nullable', 'string', 'max:255'],
            'gallery_tags' => ['nullable', 'array'],
            'gallery_tags.*' => ['nullable', 'string', 'max:100'],
        ]);
    }

    private function syncGalleryImages(Request $request, Service $service): void
    {
        if (! $request->hasFile('gallery_images')) {
            return;
        }

        $altTexts = $request->input('gallery_alt_texts', []);
        $tags = $request->input('gallery_tags', []);
        $startOrder = $service->images()->count();

        foreach ($request->file('gallery_images') as $index => $file) {
            $path = $file->store('services/gallery', 'public');

            ServiceImage::create([
                'service_id' => $service->id,
                'image_path' => $path,
                'alt_text' => $altTexts[$index] ?? null,
                'tag' => $tags[$index] ?? null,
                'is_visible' => true,
                'sort_order' => $startOrder + $index,
            ]);
        }
    }
}
