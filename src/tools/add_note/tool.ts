
import { ClaudeWeaverTool } from "../tool"

interface AddNoteToolParams {
   content: string; context: string
}

export default class AddNoteTool extends ClaudeWeaverTool<AddNoteToolParams, any> {
    public async execute({ content, context}: AddNoteToolParams): Promise<any> {
        const weaviateClient = await this.getDb();
        const notesCollection = weaviateClient.collections.get('Note');
    
        const createdNote = await notesCollection.data.insert({
            content,
            context,
            createdAt: new Date(),
        });
    
        if (!createdNote) {
            throw new Error('Failed to create note');
        }
        
        return createdNote;
    }
}