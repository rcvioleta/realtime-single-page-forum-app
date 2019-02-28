<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getPathAttribute()
    {
        return asset("app/category/$this->slug");
    }

    public function question()
    {
        return $this->belongsTo(Category::class);
    }

    public function setSlugAttribute($value)
    {
       $this->attributes['slug'] = str_slug($value);
    }
}
