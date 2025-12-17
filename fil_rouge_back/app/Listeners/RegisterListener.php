<?php

namespace App\Listeners;

use App\Events\RegisterEvent;
use App\Mail\SendEmailRegister;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class RegisterListener
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
    public function handle(RegisterEvent $event): void
    {
        $user = $event->user;
        Mail::to($user->email)->send(new SendEmailRegister($user));
    }
}
