<?php

namespace App\Providers;

use App\Http\Repositories\CustomerRepositoryInterface;
use App\Http\Repositories\Eloquent\CustomerRepositoryEloquent;
use App\Http\Services\CustomerServiceInterface;
use App\Http\Services\Imp\CustomerService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(CustomerServiceInterface::class, CustomerService::class);
        $this->app->singleton(CustomerRepositoryInterface::class, CustomerRepositoryEloquent::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
