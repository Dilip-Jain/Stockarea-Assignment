<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWarehousesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('warehouses', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('code');
            $table->string('city');

            $table->unsignedBigInteger('space_available');

            $table->unsignedTinyInteger('type');
            // 1 - Warehouse Service, 2 - Leasable Space

            $table->string('cluster');

            $table->boolean('is_registered');
            $table->boolean('is_live');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('warehouses');
    }
}
