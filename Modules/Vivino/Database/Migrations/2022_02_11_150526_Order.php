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
            $table->id();
            $table->string('order_id')->nullable();
            $table->integer('workflow')->nullable();
            $table->string('status')->nullable();
            $table->dateTime('transaction_date');
            $table->integer('items_shipping_sum')->nullable();
            $table->integer('shipping_tax')->nullable();
            $table->decimal('items_tax_sum', 15, 2)->nullable();
            $table->decimal('items_total_sum', 15, 2)->nullable();
            $table->integer('refunded_sum')->nullable();
            $table->integer('coupon_discount_sum')->nullable();
            $table->integer('coupon_discount_tax')->nullable();
            $table->string('coupon_code')->nullable();
            $table->integer('order_discount')->nullable();
            $table->string('cancellation_type_id')->nullable();
            $table->string('merchant_sla_expired')->nullable();
            $table->string('source')->nullable();
            $table->integer('user_id')->nullable();
            $table->integer('shipping_id')->nullable();
            $table->integer('billing_id')->nullable();
            $table->string('sla_type')->nullable();
            $table->timestamp('sla_expires_at')->nullable();
            $table->string('preferred_delivery_date')->nullable();
            $table->timestamp('expected_shipping_date')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            $table->timestamp('authorized_at')->nullable();
            $table->timestamp('confirmed_at')->nullable();
            $table->timestamp('shipped_at')->nullable();
            $table->timestamp('Vivinocreated_at')->nullable();
            $table->timestamp('refunded_at')->nullable();
            $table->timestamp('captured_at')->nullable();
            $table->integer('commission_rate')->nullable();
            $table->integer('shipping_tax_pct')->nullable();
            $table->integer('compensation_shipping_sum_tax_included')->nullable();
            $table->string('payment_method')->nullable();
            $table->string('payment_provider')->nullable();
            $table->decimal('discount_tax', 15, 2)->nullable();
            $table->decimal('discount_ex_tax', 15, 2)->nullable();
            $table->decimal('discount_inc_tax', 15, 2)->nullable();
            $table->integer('shipping_cost_ex_tax')->nullable();
            $table->integer('shipping_cost_inc_tax')->nullable();
            $table->decimal('subtotal_ex_tax', 15, 2)->nullable();
            $table->decimal('subtotal_inc_tax', 15, 2)->nullable();
            $table->decimal('total_tax', 15, 2)->nullable();
            $table->decimal('total_ex_tax', 15, 2)->nullable();
            $table->decimal('total_inc_tax', 15, 2)->nullable();
            $table->string('tracking_number')->nullable();
            $table->string('tracking_url')->nullable();
            $table->string('signed_by')->nullable();
            $table->string('scheduled_delivery_date')->nullable();
            $table->string('shipping_external_id')->nullable();
            $table->string('shipping_provider_id')->nullable();
            $table->string('dispatched_at')->nullable();
            $table->string('delivered_at')->nullable();
            $table->string('free_order')->nullable();
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
