<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function question()
    {
        return $this->belongsTo(Category::class);
    }
}
