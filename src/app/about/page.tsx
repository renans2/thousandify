export default function About() {
  return (
    <main>
      <h3 className="font-bold text-center text-heading mb-2">
        🔨 WORKING IN PROGRESS!!! 🔨
      </h3>
      {/* eslint-disable-next-line @next/next/no-img-element -- animated remote gif */}
      <img
        src={
          "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2diOXozZzZtYXYwcGNibmQycGRuYndrdjA3dWpyZWI4cWpydHpobSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c5eqVJN7oNLTq/giphy.gif"
        }
        alt="Work in progress"
        className="mx-auto px-2"
      />
    </main>
  );
}
