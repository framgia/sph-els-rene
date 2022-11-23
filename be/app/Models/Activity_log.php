<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity_log extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "loggable_id",
        "loggable_type",
    ];

    public function loggable()
    {
        return $this->morphTo();
    }
}
