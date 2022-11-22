<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity_log extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "loggale_id",
        "loggale_type",
    ];

    public function logable()
    {
        return $this->morphTo();
    }
}
