<?php

namespace App\Http\Controllers;

use App\Http\Requests\TagRequest;
use App\Models\Tag;
use Illuminate\Support\Collection;

class TagController extends Controller
{
    public function index(): Collection
    {
        return Tag::all();
    }

    public function store(TagRequest $request): void
    {
        Tag::create($request->all());
    }

    public function update(TagRequest $request, Tag $task): void
    {
        $task->update($request->all());
    }

    public function destroy(int $id): void
    {
        $task = Tag::where('id', $id)->delete();
    }
}
