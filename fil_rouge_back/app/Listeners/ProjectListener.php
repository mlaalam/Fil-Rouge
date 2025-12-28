<?php

namespace App\Listeners;

use App\Events\ProjectEvent;
use App\Mail\ProjectMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class ProjectListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(ProjectEvent $event): void
    {
        $user = $event->user;
        $project = $event->project;
        Mail::to($user->email)->send(new ProjectMail($user ,$project));
    }
}
