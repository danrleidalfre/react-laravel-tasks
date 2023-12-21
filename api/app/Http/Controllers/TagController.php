<?php

namespace App\Http\Controllers;

use App\Http\Requests\TagRequest;
use App\Http\Resources\TagResource;
use App\Models\Tag;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TagController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return TagResource::collection(
            Tag::all()
        );
    }

    public function store(TagRequest $request): void
    {
        Tag::create($request->all());
    }

    public function update(TagRequest $request, int $id): void
    {
        Tag::where('id', $id)->update($request->all());
    }

    public function destroy(int $id): void
    {
        Tag::where('id', $id)->delete();
    }
}
