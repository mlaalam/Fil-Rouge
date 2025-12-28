<?php

namespace App\Listeners;

use App\Events\SuspendEvent;
use App\Mail\SuspendMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SuspendListener
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
    public function handle(SuspendEvent $event): void
    {
        $user = $event->user;
        Mail::to($user->email)->send(new SuspendMail($user));
    }
}
