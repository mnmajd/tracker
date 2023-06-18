import { EventRepository,Event } from "../domain/Events";

export class EventRepositoryImpl implements EventRepository {
  async save(event: Event): Promise<void> {
    // Implementation to save the event to the data store or send it to an external service
    if (event.eventType === "click") {
      // Store click event
    } else if (event.eventType === "display") {
      // Store display event
    }

    console.log("Saving event:", event);
  }
}
