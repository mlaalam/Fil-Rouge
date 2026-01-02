<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use App\Models\User;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
         $artisan = User::findOrFail($id);

          $ratings = Rating::with('client')
              ->where('artisan_id', $artisan->id)
              ->get();

          return response()->json([
              'ratings' => $ratings,
              'average' => round((float) $ratings->avg('rating'), 1),
          ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, User $artisan)
{
    $user = auth()->user();
    if ($user->id === $artisan->id) {
        return response()->json([
            'message' => 'Vous ne pouvez pas noter votre propre profil'
        ], 403);
    }
    $alreadyRated = Rating::where('artisan_id', $artisan->id)
        ->where('client_id', $user->id)
        ->exists();

    if ($alreadyRated) {
        return response()->json([
            'message' => 'Vous avez déjà noté cet artisan'
        ], 409);
    }

    $request->validate([
        'rating' => 'required|integer|min:1|max:5',
        'comment' => 'nullable|string',
    ]);

    $rating = Rating::create([
        'artisan_id' => $artisan->id,
        'client_id' => $user->id,
        'rating' => $request->rating,
        'comment' => $request->comment,
    ]);

  return response()->json([
    'rating' => $rating->load('client'),
    'average' => $artisan->artisanRating()->avg('rating')
]);

}



    /**
     * Display the specified resource.
     */
    public function show(Rating $rating)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rating $rating)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rating $rating)
    {
        //
    }
}
