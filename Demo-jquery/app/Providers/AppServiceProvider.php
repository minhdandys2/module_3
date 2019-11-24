<?php

namespace App\Providers;

use App\Http\Repositories\Eloquent\UserRepositoryEloquent;
use App\Http\Repositories\UserRepositoryInterface;
use App\Http\Service\Impl\UserService;
use App\Http\Service\UserServiceInterface;
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
        $this->app->singleton(UserRepositoryInterface::class,UserRepositoryEloquent::class);
        $this->app->singleton(UserServiceInterface::class,UserService::class);
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
