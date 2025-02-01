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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->constrained('users');
            $table->string('product_name');
            $table->string('product_description');
            $table->string('product_image');
            $table->string('product_price');
            $table->string('product_category');
            $table->string('product_older_price');
            $table->string('product_quantity');
            $table->boolean('promotion');
            $table->boolean('em_alta');
            $table->json('metadata');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
