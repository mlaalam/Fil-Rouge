<?php

namespace App\Listeners;

use App\Events\ForgetEvent;
use App\Mail\ForgetPasswordMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class ForgetPListener
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
    public function handle(ForgetEvent $event): void
    {
        Mail::to($event->user->email)->send(new ForgetPasswordMail($event->user, $event->resetUrl));
    }
}
