import { Controller } from ".."
import { Empty, StringRequest } from "@shared/proto/cline/common"
import { openFile as openFileIntegration } from "@integrations/misc/open-file"
import path from "path"
/**
 * Opens a file in the editor
 * @param controller The controller instance
 * @param request The request message containing the file path in the 'value' field
 * @returns Empty response
 */
export async function openTaskHistory(controller: Controller, request: StringRequest): Promise<Empty> {
	const globalStoragePath = controller.context.globalStorageUri.fsPath
	const taskHistoryPath = path.join(globalStoragePath, "tasks", request.value, "api_conversation_history.json")
	if (request.value) {
		openFileIntegration(taskHistoryPath)
	}
	return Empty.create()
}
