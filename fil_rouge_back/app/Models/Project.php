<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['title','description','image','artisan_id','catigory_id'];

    public function artisan(){
      return $this->belongsTo(User::class );
    }
    public function commentaires(){
      return $this->hasMany(Commentaire::class ,'project_id');
    }
    public function category(){
      return $this->belongsTo(Category::class, 'catigory_id');
    }
}
