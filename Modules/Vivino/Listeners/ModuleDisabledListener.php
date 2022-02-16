<?php

namespace Modules\Vivino\Listeners;

use Crater\Events\ModuleDisabledEvent;
use Crater\Models\Company;
use Crater\Models\Setting;

class ModuleDisabledListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param ModuleDisabledEvent $event
     * @return void
     */
    public function handle(ModuleDisabledEvent $event)
    {
        if ($event->module->name !== config('vivinoa.name')) {
            return false;
        }
    }
}
