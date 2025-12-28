<?php

namespace App\Listeners;

use App\Events\ApproveEvent;
use App\Mail\ApproveMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class ApproveListener
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
    public function handle(ApproveEvent $event): void
    {
        $user = $event->user;
        Mail::to($user->email)->send(new ApproveMail($user));
    }
}
