<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('media_file_property', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('property_id')->index();
            $table->unsignedBigInteger('media_file_id')->index();
            $table->timestamps();

            $table->foreign('media_file_id')->references('id')->on('media_files');
            $table->foreign('property_id')->references('id')->on('properties');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('media_file_property');
    }
};
