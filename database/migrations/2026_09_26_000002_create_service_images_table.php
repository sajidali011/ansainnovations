<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('services', function (Blueprint $table) {
            if (! Schema::hasColumn('services', 'category')) {
                $table->string('category')->nullable()->after('id');
            }
            if (! Schema::hasColumn('services', 'short_description')) {
                $table->string('short_description', 500)->nullable()->after('slug');
            }
            if (! Schema::hasColumn('services', 'content')) {
                $table->longText('content')->nullable();
            }
            if (! Schema::hasColumn('services', 'breadcrumb_label')) {
                $table->string('breadcrumb_label')->nullable();
            }
            if (! Schema::hasColumn('services', 'hero_heading')) {
                $table->string('hero_heading')->nullable();
            }
            if (! Schema::hasColumn('services', 'hero_subheading')) {
                $table->text('hero_subheading')->nullable();
            }
            if (! Schema::hasColumn('services', 'hero_image')) {
                $table->string('hero_image')->nullable();
            }
            if (! Schema::hasColumn('services', 'hero_image_alt')) {
                $table->string('hero_image_alt')->nullable();
            }
            if (! Schema::hasColumn('services', 'offerings')) {
                $table->json('offerings')->nullable();
            }
            if (! Schema::hasColumn('services', 'tools')) {
                $table->json('tools')->nullable();
            }
            if (! Schema::hasColumn('services', 'process_steps')) {
                $table->json('process_steps')->nullable();
            }
            if (! Schema::hasColumn('services', 'faqs')) {
                $table->json('faqs')->nullable();
            }
            if (! Schema::hasColumn('services', 'tags')) {
                $table->json('tags')->nullable();
            }
            if (! Schema::hasColumn('services', 'cta_heading')) {
                $table->string('cta_heading')->default('Get in Touch');
            }
            if (! Schema::hasColumn('services', 'cta_button_text')) {
                $table->string('cta_button_text')->default('Send Message');
            }
            if (! Schema::hasColumn('services', 'meta_title')) {
                $table->string('meta_title')->nullable();
            }
            if (! Schema::hasColumn('services', 'meta_description')) {
                $table->string('meta_description', 500)->nullable();
            }
            if (! Schema::hasColumn('services', 'meta_keywords')) {
                $table->string('meta_keywords', 500)->nullable();
            }
            if (! Schema::hasColumn('services', 'sort_order')) {
                $table->unsignedInteger('sort_order')->default(0);
            }
            if (! Schema::hasColumn('services', 'is_active')) {
                $table->boolean('is_active')->default(true);
            }
        });
    }

    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $columns = [
                'category', 'short_description', 'content', 'breadcrumb_label',
                'hero_heading', 'hero_subheading', 'hero_image', 'hero_image_alt',
                'offerings', 'tools', 'process_steps', 'faqs', 'tags',
                'cta_heading', 'cta_button_text',
                'meta_title', 'meta_description', 'meta_keywords',
                'sort_order', 'is_active',
            ];

            foreach ($columns as $column) {
                if (Schema::hasColumn('services', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};