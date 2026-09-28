<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasColumn('services', 'description')) {
            $column = DB::select(
                "SHOW COLUMNS FROM services WHERE Field = 'description'"
            )[0];

            $type = $column->Type;

            DB::statement(
                "ALTER TABLE services MODIFY description {$type} NULL DEFAULT NULL"
            );
        }
    }

    public function down(): void
    {
        // No rollback required.
    }
};