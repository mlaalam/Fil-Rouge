<?php

namespace App\Http\Controllers;

use App\Events\ApproveEvent;
use App\Events\SuspendEvent;
use App\Http\Requests\UpdateArtisanRequest;
use App\Models\User;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ArtisanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $artisan = User::all();
        return response()->json(['artisans'=>$artisan]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $artisan = User::find($id);
        return response()->json([
          'success' => true,
          'artisan'=>$artisan
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArtisanRequest $request, string $id)
    {
        
        try{
        
        $artisan = User::find($id);
        if (!$artisan) {
        return response()->json(['error' => 'Artisan not found'], 404);
        }
        Gate::authorize('update', $artisan);
        if($request->hasFile('image')){
          $file = $request->file('image');
          $updateImage = Cloudinary::upload($file->getRealPath());
          $newImage = $updateImage->getSecurePath();
          $artisan->image = $newImage;
        }
        
        $artisan->nom_complet = $request->nom_complet ?? $artisan->nom_complet;
        $artisan->ville = $request->ville ?? $artisan->ville;
        $artisan->secteur = $request->secteur ?? $artisan->secteur;
        $artisan->propos = $request->propos ?? $artisan->propos;
        $artisan->role = $request->role ?? $artisan->role;
        $artisan->password = $request->propos ?? $artisan->password;
        $artisan->jours_de_travail = $request->jours_de_travail ?? $artisan->jours_de_travail;
        $artisan->heures_par_jour = $request->heures_par_jour ?? $artisan->heures_par_jour;

        $artisan->save();
        return response()->json(['success'=>true,'message'=>'artisan is update seccussfuly' ,'artisan'=>$artisan],200);
      }catch(\Exception $e){
          return response()->json([
          "success"=>false,
          'message' => 'Error while creating: ' . $e->getMessage()
        ],500);
    }
  }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
      try{
        $artisan = User::find($id);
        if (!$artisan) {
        return response()->json(['error' => 'Artisan not found'], 404);
        }
        Gate::authorize('delete', $artisan);
        $artisan->delete();
        return response()->json(['success'=>true,'message'=>'Artisan deleted successfully.' ,'artisan'=>$artisan->nom_complet],200);
    }catch(\Exception $e){
      return response()->json(['success'=>false ,'message' => 'Error while deleting: ' . $e->getMessage()],403);
    }
  }

  public function approve($id){
    try{
        $artisan = User::find($id);
        if (!$artisan) {
        return response()->json(['error' => 'Artisan not found'], 404);
        }
        Gate::authorize('approve', $artisan);
        if($artisan->status === 'En attente'){
          $artisan->status = 'Actif';
          // ApproveEvent::dispatch($artisan);
          $artisan->save();
          return response()->json(['success'=>true,'message'=>'Artisan approved successfully.' ,'artisan'=>$artisan->nom_complet],200);
        }else{
            return response()->json(['success'=>true,'message'=>'Artisan is already approved.'],401);
        }
        
    }catch(\Exception $e){
      return response()->json(['success'=>false ,'message' => 'An error occurred while approving the artisan. ' . $e->getMessage()],403);
    }
  }
  public function suspend($id){
    try{
        $artisan = User::find($id);
        if (!$artisan) {
        return response()->json(['error' => 'Artisan not found'], 404);
        }
        Gate::authorize('suspend', $artisan);
        if($artisan->status === 'Actif'){
          $artisan->status = 'Suspend';
          // SuspendEvent::dispatch($artisan);
          $artisan->save();
          return response()->json(['success'=>true,'message'=>'Artisan Suspended successfully.' ,'artisan'=>$artisan->nom_complet],200);
        }else{
            return response()->json(['success'=>true,'message'=>'Artisan is already suspended.'],401);
        }
      
        
    }catch(\Exception $e){
      return response()->json(['success'=>false ,'message' => 'An error occurred while Suspending the artisan. ' . $e->getMessage()],403);
    }
  }
}
