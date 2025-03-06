CREATE TABLE "todo" (
	"id" integer PRIMARY KEY NOT NULL,
	"task" text NOT NULL,
	"done" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
