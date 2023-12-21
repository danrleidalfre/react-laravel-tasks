<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TaskController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return TaskResource::collection(
            Task::with('tags')->get()
        );
    }

    public function store(TaskRequest $request): void
    {
        $data = $request->all();
        $task = Task::create($data);
        $task->tags()->sync($data['tags']);
    }

    public function update(TaskRequest $request, Task $task): void
    {
        $data = $request->all();
        $task->update($data);
        $task->tags()->sync($data['tags']);
    }

    public function destroy(int $id): void
    {
        $task = Task::where('id', $id)->first();
        $task->tags()->detach();
        $task->delete();
    }
}
