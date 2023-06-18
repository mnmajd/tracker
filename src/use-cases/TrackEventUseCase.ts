// application/TrackEventUseCase.ts

import { EventRepository,Event } from "../domain/Events";


export class TrackEventUseCase {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(event: Event): Promise<void> {
    // Additional business logic if needed
    // Validate event type or perform specific actions based on the event type
    if (event.eventType === "click") {
      // Handle click event
    } else if (event.eventType === "display") {
      // Handle display event
    }

    await this.eventRepository.save(event);
  }
}
