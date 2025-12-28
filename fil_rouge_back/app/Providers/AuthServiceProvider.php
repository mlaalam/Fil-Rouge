<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use App\Models\Category;
use App\Models\Project;
use App\Models\Services;
use App\Models\User;
use App\Policies\ArtisanPolicy;
use App\Policies\CategoryPolicy;
use App\Policies\ProjectPolicy;
use App\Policies\ServicesPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        User::class => ArtisanPolicy::class,
        Project::class => ProjectPolicy::class,
        Category::class => CategoryPolicy::class,
        Services::class => ServicesPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();
    }
}
