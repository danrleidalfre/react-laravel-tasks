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
            Task::with('tags')
                ->orderByDesc('created_at')
                ->get()
        );
    }

    public function store(TaskRequest $request): void
    {
        $data = $request->all();
        $task = Task::create($data);
        $task->tags()->sync($data['tags']);
    }

    public function destroy(int $id): void
    {
        $task = Task::where('id', $id)->first();
        $task->tags()->detach();
        $task->delete();
    }

    public function complete(int $id): void
    {
        Task::where('id', $id)->update(['completed_at' => now()]);
    }

    public function update(TaskRequest $request, int $id): void
    {
        $data = $request->all();
        $task = Task::with('tags')->where('id', $id)->first();
        $task->update($data);
        $task->tags()->sync($data['tags']);
    }
}
