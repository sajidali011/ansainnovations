<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        $constraints = DB::select("
            SELECT tc.CONSTRAINT_NAME
            FROM information_schema.TABLE_CONSTRAINTS tc
            WHERE tc.TABLE_SCHEMA = DATABASE()
              AND tc.TABLE_NAME = 'services'
              AND tc.CONSTRAINT_TYPE = 'CHECK'
        ");

        foreach ($constraints as $constraint) {
            $name = $constraint->CONSTRAINT_NAME;

            try {
                DB::statement("ALTER TABLE services DROP CHECK `{$name}`");
            } catch (\Throwable $e) {
                try {
                    DB::statement("ALTER TABLE services DROP CONSTRAINT `{$name}`");
                } catch (\Throwable $e2) {
                    // already gone -- ignore
                }
            }
        }
    }

    public function down(): void
    {
        // Old check constraints are not restored -- leftovers from an earlier
        // version of this table, not needed going forward.
    }
};