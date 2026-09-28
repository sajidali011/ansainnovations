<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // MySQL uses "DROP CHECK", MariaDB uses "DROP CONSTRAINT" for the same
        // thing — try one, fall back to the other so this works on both.
        try {
            DB::statement("ALTER TABLE services DROP CHECK `content`");
        } catch (\Throwable $e) {
            try {
                DB::statement("ALTER TABLE services DROP CONSTRAINT `content`");
            } catch (\Throwable $e2) {
                // Constraint already gone / never existed — nothing to do.
            }
        }
    }

    public function down(): void
    {
        // Not reversing — this was a leftover constraint from an older schema.
    }
};