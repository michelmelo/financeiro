<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Order extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vivino_orders', function (Blueprint $table) {

            $table->string('id')->primary();
            $table->string('status')->nullable();
            $table->string('order_type')->nullable();
            $table->string('currency_code')->nullable();
            $table->string('external_id')->nullable();
            $table->string('client_name')->nullable();
            $table->string('shipping_email')->nullable();
            $table->mediumText('note')->nullable();
            $table->string('shipping_address')->nullable();
            $table->string('billing_address')->nullable();
            $table->string('shipping_instructions')->nullable();

            $table->decimal('items_total_sum',22,2)->nullable();
            $table->integer('items_units_sum')->nullable();
            $table->integer('items_shipping_sum' )->nullable();
            $table->decimal('items_tax_sum',22,2)->nullable();

            $table->integer('user_id')->nullable();
            $table->string('billing_name')->nullable();
            $table->integer('cancellation_type_id')->nullable();
            $table->string('sla_type')->nullable();
            $table->dateTime('sla_expires_at')->nullable();
            $table->boolean('merchant_sla_expired')->nullable();
            $table->dateTime('shipped_at')->nullable();
            $table->string('documents')->nullable();

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
        Schema::dropIfExists('vivino_orders');
    }
}
// $table->decimal('quantity', 15, 2);
