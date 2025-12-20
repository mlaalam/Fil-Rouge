<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ForgetPasswordMail extends Mailable
{
    public $user;
    public $resetUrl;

    public function __construct($user, $resetUrl)
    {
        $this->user = $user;
        $this->resetUrl = $resetUrl;
    }

    public function build()
    {
        return $this->subject('Réinitialisation de votre mot de passe')
                    ->view('emails.forgot-password');
    }
}

