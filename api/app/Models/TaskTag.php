<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaskTag extends Model
{
    public $timestamps = false;

    protected $table = 'task_tag';

    protected $fillable = [
        'task_id',
        'tag_id'
    ];
}
