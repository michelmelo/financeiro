<?php

namespace Modules\Vivino\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Modules\Vivino\Models\VivinoOrder;

class VivinoOrderUpdate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:orders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update orders';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $response = Http::acceptJson()->get(env('URL_VININO_ORDERS'));


        foreach ($response->json() as $item) {
            $item = (object) $item;
            if (isset($item->sla) && !is_null($item->sla)) {
                $item->sla = (object)$item->sla;
                $item->sla_type = $item->sla->type;
                $item->sla_expires_at = $item->sla->expires_at;

            }
            unset($item->sla);

            VivinoOrder::updateOrCreate(['id' => $item->id], (array)$item);
        }
//        dd($orders);


        return 0;
    }
}
