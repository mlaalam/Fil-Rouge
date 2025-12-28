<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    use HasFactory;
    protected $fillable = ['title','artisan_id'];

    public function artisan(){
      return $this->belongsTo(User::class);
    }
}
