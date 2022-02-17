<?php

namespace Modules\Vivino\Providers;


use Crater\Events\ModuleDisabledEvent;
use Crater\Services\Module\ModuleFacade;
use Illuminate\Support\ServiceProvider;
use Modules\Vivino\Console\Commands\VivinoOrderUpdate;
use Modules\Vivino\Listeners\ModuleDisabledListener;
use Illuminate\Console\Scheduling\Schedule;

class VivinoServiceProvider extends ServiceProvider
{
    /**
     * @var string
     */
    protected $moduleName = 'Vivino';

    /**
     * @var string
     */
    protected $moduleNameLower = 'vivino';

    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerTranslations();
        $this->registerConfig();
        $this->registerCommands();
        $this->registerSchedule();
        $this->registerViews();
        $this->registerMenu();
        $this->registerPublicFiles();
        $this->loadMigrationsFrom(module_path($this->moduleName, 'Database/Migrations'));
    }
    /**
     * Register the console commands
     */
    private function registerCommands()
    {
        $this->commands([
            VivinoOrderUpdate::class
        ]);


    }
    /**
     * Register the schedule events
     */
    private function registerSchedule()
    {
        $this->app->booted(function () {
            $schedule = $this->app->make(Schedule::class);
            $schedule->command('update:orders')->everyFiveMinutes();
        });
    }
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app['events']->listen(ModuleDisabledEvent::class, ModuleDisabledListener::class);
        $this->app->register(RouteServiceProvider::class);
    }

    /**
     * Register config.
     *
     * @return void
     */
    protected function registerConfig()
    {
        $this->publishes([
            module_path($this->moduleName, 'Config/config.php') => config_path($this->moduleNameLower . '.php'),
        ], 'config');

        $this->mergeConfigFrom(
            module_path($this->moduleName, 'Config/config.php'),
            $this->moduleNameLower
        );
    }

    /**
     * Register views.
     *
     * @return void
     */
    public function registerViews()
    {
        $viewPath = resource_path('views/modules/' . $this->moduleNameLower);

        $sourcePath = module_path($this->moduleName, 'Resources/views');

        $this->publishes([
            $sourcePath => $viewPath,
        ], ['views', $this->moduleNameLower . '-module-views']);

        $this->loadViewsFrom(array_merge($this->getPublishableViewPaths(), [$sourcePath]), $this->moduleNameLower);
    }

    /**
     * Register translations.
     *
     * @return void
     */
    public function registerTranslations()
    {
        $langPath = resource_path('lang/modules/' . $this->moduleNameLower);

        if (is_dir($langPath)) {
            $this->loadTranslationsFrom($langPath, $this->moduleNameLower);
        } else {
            $this->loadTranslationsFrom(module_path($this->moduleName, 'Resources/lang'), $this->moduleNameLower);
        }
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }

    private function getPublishableViewPaths(): array
    {
        $paths = [];
        foreach (\Config::get('view.paths') as $path) {
            if (is_dir($path . '/modules/' . $this->moduleNameLower)) {
                $paths[] = $path . '/modules/' . $this->moduleNameLower;
            }
        }

        return $paths;
    }

    public function registerMenu()
    {
        $data = [
            'title'      => 'vivino.customer_portal_title',
            'group'      => '',
            'name'       => 'Vivino',
            'link'       => '/admin/settings/vivino',
            'icon'       => 'TagIcon',
            'owner_only' => true,
            'ability'    => '',
            'model'      => '',
        ];

        \Menu::make('setting_menu', function ($menu) use ($data) {
            $menu->add($data['title'], $data['link'])
                ->data('icon', $data['icon'])
                ->data('name', $data['name'])
                ->data('owner_only', $data['owner_only'])
                ->data('ability', $data['ability'])
                ->data('model', $data['model'])
                ->data('group', $data['group']);
        });
    }

    /**
     * Register public files.
     *
     * @return void
     */
    protected function registerPublicFiles()
    {
        ModuleFacade::script('vivino', __DIR__ . '/../dist/vivino.umd.js');
        ModuleFacade::style('vivino', __DIR__ . '/../dist/style.css');
    }
}
