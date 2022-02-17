<?php

namespace Modules\Vivino\Models;

use Illuminate\Database\Eloquent\Model;

class VivinoOrder extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'vivino_orders';
    protected $keyType = 'string';
    protected $fillable = ['id', 'status', 'order_type', 'currency_code', 'external_id', 'client_name', 'shipping_email', 'note', 'shipping_address', 'billing_address', 'shipping_instructions', 'items_total_sum', 'items_units_sum', 'items_shipping_sum', 'items_tax_sum', 'user_id', 'billing_name', 'cancellation_type_id', 'sla_type', 'sla_expires_at', 'merchant_sla_expired', 'shipped_at', 'documents'];
    public $timestamps = true;
}
