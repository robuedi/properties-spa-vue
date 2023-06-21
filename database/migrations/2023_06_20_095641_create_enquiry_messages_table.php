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
        Schema::create('enquiry_messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('enquiry_id')->index();
            $table->unsignedBigInteger('from_user_id')->index();
            $table->unsignedBigInteger('to_user_id')->index();
            $table->string('message', 255);
            $table->timestamps();

            $table->foreign('enquiry_id')->references('id')->on('enquiries');
            $table->foreign('from_user_id')->references('id')->on('users');
            $table->foreign('to_user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enquiry_messages');
    }
};
