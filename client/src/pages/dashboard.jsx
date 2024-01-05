import { useState } from 'react';
import { useForm } from 'react-hook-form';
import elf from '../assets/shelf.jpg';

function Dashboard() {
  const { register, handleSubmit, reset } = useForm();
  const [participants, setParticipants] = useState([]);

  const onSubmit = data => {
    setParticipants([...participants, data.participant]);
    reset();
  };

  const removeParticipant = participant => {
    setParticipants(participants.filter(p => p !== participant));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 bg-cover" style={{ backgroundImage: `url(${elf})` }}>
      <div className="content-container text-center">
        <h1 className="text-4xl mb-4 text-green-800">Welcome to Secret Santa!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('date')} placeholder="Date" required />
          <input {...register('location')} placeholder="Location" required />
          <input {...register('amount')} placeholder="Spending Amount" required />
          <input {...register('participant')} placeholder="Participant" required />
          <button type="submit">Add Participant</button>
        </form>
        <h2>Who is participating?</h2>
        {participants.map((participant, index) => (
          <div key={index}>
            {participant} <button onClick={() => removeParticipant(participant)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;