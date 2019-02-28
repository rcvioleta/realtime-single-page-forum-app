<?php

namespace App\Http\Controllers;

use App\Model\Like;
use App\Model\Reply;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function likeIt(Reply $reply) 
    {
        return $reply->likes()->create([
            // 'user_id' => auth()->id,
            'user_id' => 1,
        ]);
    }

    public function unlikeIt(Reply $reply)
    {
        //$reply->likes()->where('user_id', auth()->id)->first()->delete();
        $reply->likes()->where('user_id', 4)->first()->delete();
        return response(null, 204);
    }
}
