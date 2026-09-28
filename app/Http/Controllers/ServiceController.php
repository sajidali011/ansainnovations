<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    /** GET /services — list of all active services */
    public function index(): Response
    {
        $services = Service::where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id', 'title', 'slug', 'category', 'short_description', 'hero_image', 'hero_image_alt',
            ]);

        return Inertia::render('Services', [
            'services' => $services,
        ]);
    }

    /** GET /services/{slug} — single service detail page */
    public function show(Service $service): Response
    {
        abort_unless($service->is_active, 404);

        $service->load('visibleImages');

        return Inertia::render('ServiceDetail', [
            'service' => [
                ...$service->toArray(),
                'images' => $service->visibleImages,
            ],
        ]);
    }
}
