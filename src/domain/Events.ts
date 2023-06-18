// domain/Event.ts
export interface Event {
    id: string;
    name: string;
    timestamp: Date;
    eventType: "click" | "display"; // New property for event type
    // Other event properties specific to click or display events
  }
  
  // domain/EventRepository.ts
  export interface EventRepository {
    save(event: Event): Promise<void>;
  }
  