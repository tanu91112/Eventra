import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Calendar, MapPin, Users, Filter } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  category: string;
  capacity: number;
  registered: number;
  image: string;
  club: string;
}

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'academic', name: 'Academic' },
    { id: 'career', name: 'Career' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'sports', name: 'Sports' },
    { id: 'gssoc', name: 'GSSOC Registration' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Mock data for events
    const mockEvents: Event[] = [
      // Academic Events
      {
        id: '1',
        title: 'Tech Symposium 2024',
        description: 'Annual technology conference featuring industry leaders and workshops',
        date: '2024-05-15',
        time: '10:00 AM',
        venue: 'AB2 Auditorium',
        location: 'Engineering Block',
        category: 'Academic',
        capacity: 200,
        registered: 150,
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        club: 'GSSOC Club'
      },
      {
        id: '2',
        title: 'Research Paper Writing Workshop',
        description: 'Learn the art of academic writing and research methodology',
        date: '2024-05-18',
        time: '2:00 PM',
        venue: 'AB Auditorium',
        location: 'Central Library',
        category: 'Academic',
        capacity: 100,
        registered: 75,
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
        club: 'Research Society'
      },
      {
        id: '3',
        title: 'Mathematics Olympiad',
        description: 'Annual mathematics competition for students',
        date: '2024-05-22',
        time: '9:00 AM',
        venue: 'AB2 Auditorium',
        location: 'Science Block',
        category: 'Academic',
        capacity: 150,
        registered: 120,
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        club: 'Mathematics Club'
      },
      {
        id: '4',
        title: 'Science Fair 2024',
        description: 'Showcase of innovative science projects and experiments',
        date: '2024-05-25',
        time: '11:00 AM',
        venue: 'AB Auditorium',
        location: 'Science Block',
        category: 'Academic',
        capacity: 300,
        registered: 250,
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        club: 'Science Society'
      },

      // Career Events
      {
        id: '5',
        title: 'Career Fair',
        description: 'Connect with top companies and explore internship opportunities',
        date: '2024-05-20',
        time: '9:00 AM',
        venue: 'AB2 Auditorium',
        location: 'Central Campus',
        category: 'Career',
        capacity: 500,
        registered: 300,
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
        club: 'Career Services'
      },
      {
        id: '6',
        title: 'Resume Building Workshop',
        description: 'Learn how to create an impressive resume and cover letter',
        date: '2024-05-21',
        time: '3:00 PM',
        venue: 'AB Auditorium',
        location: 'Student Services Building',
        category: 'Career',
        capacity: 80,
        registered: 60,
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        club: 'Career Development Office'
      },
      {
        id: '7',
        title: 'Mock Interviews',
        description: 'Practice your interview skills with industry professionals',
        date: '2024-05-23',
        time: '10:00 AM',
        venue: 'AB2 Auditorium',
        location: 'Career Center',
        category: 'Career',
        capacity: 50,
        registered: 40,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        club: 'Career Services'
      },
      {
        id: '8',
        title: 'Entrepreneurship Summit',
        description: 'Learn from successful entrepreneurs and pitch your ideas',
        date: '2024-05-26',
        time: '1:00 PM',
        venue: 'AB Auditorium',
        location: 'Business Block',
        category: 'Career',
        capacity: 200,
        registered: 180,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
        club: 'Entrepreneurship Club'
      },

      // Cultural Events
      {
        id: '9',
        title: 'Cultural Festival',
        description: 'Celebrate diversity with performances, food, and cultural exhibits',
        date: '2024-05-25',
        time: '4:00 PM',
        venue: 'AB2 Auditorium',
        location: 'East Campus',
        category: 'Cultural',
        capacity: 1000,
        registered: 800,
        image: 'https://images.unsplash.com/photo-1511795409834-432f31197ce6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        club: 'Cultural Society'
      },
      {
        id: '10',
        title: 'International Food Fair',
        description: 'Taste cuisines from around the world',
        date: '2024-05-27',
        time: '12:00 PM',
        venue: 'AB Auditorium',
        location: 'Student Center',
        category: 'Cultural',
        capacity: 300,
        registered: 250,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        club: 'International Students Association'
      },
      {
        id: '11',
        title: 'Art Exhibition',
        description: 'Showcase of student artwork and installations',
        date: '2024-05-28',
        time: '11:00 AM',
        venue: 'AB2 Auditorium',
        location: 'Fine Arts Building',
        category: 'Cultural',
        capacity: 150,
        registered: 100,
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1445&q=80',
        club: 'Fine Arts Society'
      },
      {
        id: '12',
        title: 'Music Festival',
        description: 'Live performances by student bands and artists',
        date: '2024-05-29',
        time: '6:00 PM',
        venue: 'AB Auditorium',
        location: 'West Campus',
        category: 'Cultural',
        capacity: 500,
        registered: 400,
        image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        club: 'Music Society'
      },

      // Wellness Events
      {
        id: '13',
        title: 'Yoga and Meditation Workshop',
        description: 'Learn stress management techniques and mindfulness practices',
        date: '2024-05-30',
        time: '8:00 AM',
        venue: 'AB2 Auditorium',
        location: 'Wellness Center',
        category: 'Wellness',
        capacity: 40,
        registered: 35,
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80',
        club: 'Wellness Club'
      },
      {
        id: '14',
        title: 'Mental Health Awareness Seminar',
        description: 'Understanding mental health and coping strategies',
        date: '2024-05-31',
        time: '2:00 PM',
        venue: 'AB Auditorium',
        location: 'Health Center',
        category: 'Wellness',
        capacity: 100,
        registered: 80,
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80',
        club: 'Mental Health Support Group'
      },
      {
        id: '15',
        title: 'Nutrition Workshop',
        description: 'Learn about healthy eating habits and meal planning',
        date: '2024-06-01',
        time: '4:00 PM',
        venue: 'AB2 Auditorium',
        location: 'Wellness Center',
        category: 'Wellness',
        capacity: 30,
        registered: 25,
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80',
        club: 'Nutrition Club'
      },
      {
        id: '16',
        title: 'Stress Management Workshop',
        description: 'Techniques to manage academic and personal stress',
        date: '2024-06-02',
        time: '3:00 PM',
        venue: 'AB Auditorium',
        location: 'Student Services Building',
        category: 'Wellness',
        capacity: 60,
        registered: 50,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        club: 'Student Wellness Center'
      },

      // Sports Events
      {
        id: '17',
        title: 'Annual Sports Meet',
        description: 'Inter-departmental sports competition',
        date: '2024-06-03',
        time: '9:00 AM',
        venue: 'AB2 Auditorium',
        location: 'Sports Block',
        category: 'Sports',
        capacity: 2000,
        registered: 1500,
        image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        club: 'Sports Committee'
      },
      {
        id: '18',
        title: 'Basketball Tournament',
        description: 'Inter-college basketball championship',
        date: '2024-06-04',
        time: '10:00 AM',
        venue: 'AB Auditorium',
        location: 'Sports Complex',
        category: 'Sports',
        capacity: 100,
        registered: 80,
        image: 'https://images.unsplash.com/photo-1546519638-68e109dbb01d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        club: 'Basketball Club'
      },
      {
        id: '19',
        title: 'Swimming Competition',
        description: 'Annual swimming championship',
        date: '2024-06-05',
        time: '8:00 AM',
        venue: 'AB2 Auditorium',
        location: 'Sports Complex',
        category: 'Sports',
        capacity: 50,
        registered: 40,
        image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        club: 'Swimming Club'
      },
      {
        id: '20',
        title: 'Cricket Match',
        description: 'Inter-university cricket tournament',
        date: '2024-06-06',
        time: '2:00 PM',
        venue: 'AB Auditorium',
        location: 'Sports Complex',
        category: 'Sports',
        capacity: 500,
        registered: 400,
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        club: 'Cricket Club'
      }
    ];

    // Add GSSOC Registration event
    const gssocEvent: Event = {
      id: '21',
      title: 'GSSOC 2024 Registration',
      description: 'Register for GirlScript Summer of Code 2024 - A 3-month long Open Source Program',
      date: '2024-03-01',
      time: '12:00 PM',
      venue: 'Online',
      location: 'Virtual',
      category: 'GSSOC',
      capacity: 10000,
      registered: 5000,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      club: 'GirlScript Foundation'
    };

    const allEvents = [...mockEvents, gssocEvent];
    setEvents(allEvents);
    setFilteredEvents(allEvents);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category.toLowerCase() === selectedCategory));
    }
  }, [selectedCategory, events]);

  const fadeIn = `transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  const handleRegister = async (eventId: string) => {
    // Special handling for GSSOC registration
    if (eventId === '21') {
      window.open('https://shorturl.at/Vtadn', '_blank');
      return;
    }

    try {
      const response = await fetch(`/api/events/${eventId}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (response.ok) {
        setEvents(events.map(event => 
          event.id === eventId 
            ? { ...event, registered: event.registered + 1 }
            : event
        ));
        alert('Successfully registered for the event! +10 XP added to your profile.');
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Error registering for event:', error);
      alert('Failed to register for the event. Please try again.');
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-blue-900 to-slate-900"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-no-repeat bg-cover bg-center" style={{
            backgroundImage: "url('/src/img/1743184158426.jpeg')"
          }}></div>
        </div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-white" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative w-full h-screen bg-cover bg-center flex items-center">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className={`text-center lg:text-left ${fadeIn}`}>
              <div className="inline-block px-3 py-1 mb-6 bg-teal-400/20 backdrop-blur-sm rounded-full border border-teal-400/30">
                <span className="text-teal-200 font-medium text-sm">One stop solution to all your Event related queries</span>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-teal-500/20 blur-xl rounded-3xl"></div>
                <div className="relative">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Transform Your College Life
                    <span className="block text-teal-400 mt-2">With Eventra</span>
                  </h1>
                </div>
              </div>

              <p className="text-xl text-slate-200 mb-8 max-w-2xl backdrop-blur-sm bg-slate-800/30 p-4 rounded-lg">
                Discover, register, and review college events while earning XP and Vibe Score points.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-teal-400 animate-bounce" />
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-slate-600 mr-2" />
            <h2 className="text-lg font-semibold text-slate-900">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-teal-500 text-white px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{event.title}</h3>
                  <p className="text-slate-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-slate-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.venue}, {event.location}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Organized by {event.club}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-slate-500">
                      {event.registered}/{event.capacity} registered
                    </div>
                    <button
                      onClick={() => handleRegister(event.id)}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">No events found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;