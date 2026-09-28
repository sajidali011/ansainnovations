<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'title',
        'slug',
        'short_description',
        'content',
        'breadcrumb_label',
        'hero_heading',
        'hero_subheading',
        'hero_image',
        'hero_image_alt',
        'offerings',
        'tools',
        'process_steps',
        'faqs',
        'tags',
        'cta_heading',
        'cta_button_text',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'offerings' => 'array',
        'tools' => 'array',
        'process_steps' => 'array',
        'faqs' => 'array',
        'tags' => 'array',
        'is_active' => 'boolean',
    ];

    // Use slug in URLs instead of id: /services/{slug}
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function images(): HasMany
    {
        return $this->hasMany(ServiceImage::class)->orderBy('sort_order');
    }

    public function visibleImages(): HasMany
    {
        return $this->images()->where('is_visible', true);
    }

    /**
     * Generate a unique slug from the title, e.g. "Digital Marketing" -> "digital-marketing"
     * If it already exists it becomes "digital-marketing-1", "digital-marketing-2", etc.
     */
    public static function generateUniqueSlug(string $title, ?int $ignoreId = null): string
    {
        $slug = Str::slug($title);
        $original = $slug;
        $i = 1;

        while (
            static::where('slug', $slug)
                ->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))
                ->exists()
        ) {
            $slug = "{$original}-{$i}";
            $i++;
        }

        return $slug;
    }
}
