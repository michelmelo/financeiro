<?php

namespace Modules\Vivino\Entities;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VivinoOrder extends Model
{
    use HasFactory;

    protected $fillable = [
                            'order_id',
                            'workflow',
                            'status',
                            'transaction_date',
                            'items_shipping_sum',
                            'shipping_tax',
                            'items_tax_sum',
                            'items_total_sum',
                            'refunded_sum',
                            'coupon_discount_sum',
                            'coupon_discount_tax',
                            'coupon_code',
                            'order_discount',
                            'cancellation_type_id',
                            'merchant_sla_expired',
                            'source',
                            'user_id',
                            'shipping_id',
                            'billing_id',
                            'sla_type',
                            'sla_expires_at',
                            'preferred_delivery_date',
                            'expected_shipping_date',
                            'cancelled_at',
                            'authorized_at',
                            'confirmed_at',
                            'shipped_at',
                            'Vivinocreated_at',
                            'refunded_at',
                            'captured_at',
                            'commission_rate',
                            'shipping_tax_pct',
                            'compensation_shipping_sum_tax_included',
                            'payment_method',
                            'payment_provider',
                            'discount_tax',
                            'discount_ex_tax',
                            'discount_inc_tax',
                            'shipping_cost_ex_tax',
                            'shipping_cost_inc_tax',
                            'subtotal_ex_tax',
                            'subtotal_inc_tax',
                            'total_tax',
                            'total_ex_tax',
                            'total_inc_tax',
                            'tracking_number',
                            'tracking_url',
                            'signed_by',
                            'scheduled_delivery_date',
                            'shipping_external_id',
                            'shipping_provider_id',
                            'dispatched_at',
                            'delivered_at',
                            'free_order', ];

    protected static function newFactory()
    {
        return \Modules\Vivino\Database\factories\OrderFactory::new();
    }
}
