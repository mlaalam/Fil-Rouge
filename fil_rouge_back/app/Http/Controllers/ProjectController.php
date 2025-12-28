<?php

namespace App\Http\Controllers;

use App\Events\ProjectEvent;
use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\User;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::with('category')->with('artisan')->get();
        return response()->json(['success'=>true ,'projects'=>$projects],201);
    }
    public function myProject(){
        $user = Auth::user();
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized'
            ], 401);
        }
        $projects = $user->projects()->with('category')->get();
        return response()->json(['success'=>true ,'projects'=>$projects],201);
    }
  

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
      try{
        
          $user = Auth::user();
          if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'You must be logged in to create a project.'
            ], 401);
            }
          Gate::authorize('create' ,Project::class);
          $uploadImage = Cloudinary::upload(
            $request->file('image')->getRealPath()
          );
          $imageUrl = $uploadImage->getSecurePath();
          $project = Project::create([
          'title'=>$request->title,
          'description'=>$request->description,
          'image'=>$imageUrl,
          'artisan_id'=>$user->id,
          'catigory_id'=>$request->category
        ]);
        return response()->json(['success'=>true ,'message' => 'Project created successfully.','project'=>$project],201);
      }catch(\Exception $e){
        return response()->json(['success'=>false , 'message' => 'Error while creating the project.' . $e->getMessage()],500);
      }
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project ,$id)
    {
        $project = Project::find($id);
        if (!$project) {
        return response()->json(['error' => 'project not found'], 404);
        }
        return response()->json(['success'=>true , 'project'=>$project],201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project ,$id)
    {
        try{
          $project = Project::find($id);
          if (!$project) {
          return response()->json(['error' => 'project not found'], 404);
          }
          Gate::authorize('update',$project);
          if($request->hasFile('file')){
            $updateImage = Cloudinary::upload(
              $request->file('image')->getRealPath()
            );
            $imageUrl = $updateImage->getSecurePath();
            $project->image = $imageUrl ?? $project->image;
          }
          $project->title = $request->title ?? $project->title;
          $project->description = $request->description ?? $project->description;
          $project->catigory_id = $request->category ?? $project->catigory_id;
          $project->save();
          return response()->json(['success'=>true , 'Project updated successfully.','project'=>$project]);
        }catch(\Exception $e){
          return response()->json(['success'=>false , 'message' => 'Error while updating the project.' . $e->getMessage()],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project,$id)
    {
        try{
          $project = Project::find($id);
            if (!$project) {
              return response()->json(['error' => 'project not found'], 404);
            }
              Gate::authorize('delete', $project);
              $project->delete();
              return response()->json(['success'=>true,'message'=>'project deleted successfully.' ,'project'=>$project],200);
          }catch(\Exception $e){
            return response()->json(['success'=>false ,'message' => 'Error while deleting: ' . $e->getMessage()],403);
          }
    }

      public function done($id){
      
        try
        {
          // $user = Auth::user();
          $project = Project::find($id);
          if (!$project) {
                return response()->json([
                    'success' => false,
                    'message' => 'project not found .'
                ], 401);
                }
          Gate::authorize('done', $project);
          $project->status = 1 ?? $project->status;
          $project->date_fin = now();
          // ProjectEvent::dispatch($user ,$project);
          $project->save();
          return response()->json(['success'=>true,'message'=>'project finished .' ,'project'=>$project],200);
        }catch(\Exception $e){
          return response()->json(['success'=>false ,'message' => 'Error while finish: ' . $e->getMessage()],500);
        }
    }
}
