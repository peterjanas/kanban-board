import { describe, it, expect, beforeEach } from "vitest";
import { useKanban } from "../src/composables/useKanban";

import { tasks as allTasks } from "../src/composables/useKanban";

describe("useKanban", () => {
  let kanban: ReturnType<typeof useKanban>;

  beforeEach(() => {
    allTasks.value = []; // Reset all tasks
    kanban = useKanban();
  });

  it("starts with an empty task list", () => {
    expect(kanban.tasks.value).toHaveLength(0);
  });

  it("adds a task to the list", () => {
    kanban.addTask({
      id: 1,
      title: "Test task",
      description: "This is a test task",
      status: "todo",
    });

    expect(kanban.tasks.value).toHaveLength(1);
    expect(kanban.todo.value).toHaveLength(1);
    expect(kanban.todo.value[0].title).toBe("Test task");
  });

  it("updates a task's status", () => {
    kanban.addTask({
      id: 1,
      title: "Move me",
      description: "",
      status: "todo",
    });

    kanban.updateTaskStatus(1, "done");

    expect(kanban.todo.value).toHaveLength(0);
    expect(kanban.done.value[0].title).toBe("Move me");
  });

  it("deletes a task", () => {
    kanban.addTask({
      id: 1,
      title: "Delete me",
      description: "",
      status: "inProgress",
    });

    kanban.deleteTask(1);

    expect(kanban.tasks.value).toHaveLength(0);
    expect(kanban.inProgress.value).toHaveLength(0);
  });
});
