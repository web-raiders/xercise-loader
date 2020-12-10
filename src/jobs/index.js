import env from '../config/env';
import toolbox from '../helper/toolbox';
import db from '../service';

const users = {
  async getUser(root, { key, email }, { req, models }) {
    await toolbox.keyCheck(req, key);
    return db.find(models.User, { email });
  },
  async addUser(root, {
    firstName,
    lastName,
    email,
    password,
    key,
  }, { req, models }) {
    await toolbox.keyCheck(req, key);
    password = await toolbox.hashPassword(password);
    const user = await db.add(models.User, {
      firstName,
      lastName,
      email,
      password,
    });
    return user;
  },
};

const categories = {
  async addCategory(root, {
    name,
    key
  }, { req, models }) {
    await toolbox.keyCheck(req, key);
    const data = await db.add(models.Category, {
      name,
    });
    return data;
  },

  async allCategories(root, { key }, { req, models }) {
    await toolbox.keyCheck(req, key);
    return db.all(models.Category);
  }
};

const workouts = {
  async addWorkout(root, {
    category,
    name,
    difficulty,
    key
  }, { req, models }) {
    await toolbox.keyCheck(req, key);
    const cat = await db.find(models.Category, { name: category });
    if (!cat) toolbox.errors(req.res, 'this category does not exist', 400);
    const data = await db.add(models.Workout, {
      name,
      categoryId: cat.id,
      difficulty,
    });
    // console.log('🚨 Values: ', data);
    data.category = cat;
    return data;
  },

  async allWorkouts(root, { key }, { req, models }) {
    await toolbox.keyCheck(req, key);
    const data = await db.allWorkouts(models.Workout, models.Category);
    // console.log('🚨 Values: ', data);
    return data;
  }
};

const sessions = {
  async addSession(root, {
    userId,
    status,
    date,
    key,
  }, { req, models }) {
    await toolbox.keyCheck(req, key);
    const user = await db.find(models.User, { id: userId });
    // console.log(user);
    if (!user) return toolbox.errors(req.res, 'the user with this id does not exist', 404);
    const data = await db.add(models.Session, {
      userId,
      status,
      date,
    });
    data.user = user;
    return data;
  },

  async allSessions(root, { key }, { req, models }) {
    await toolbox.keyCheck(req, key);
    const data = await db.allSessions(models.Session, models.User);
    return data;
  }
};

const routines = {
  async addRoutine(root, {
    sessionId,
    workoutId,
    numberOfSets,
    repsPerSet,
    status,
    weight,
    key,
  }, { req, models }) {
    await toolbox.keyCheck(req, key);
    const session = await db.find(models.Session, { id: sessionId });
    if (!session) return toolbox.errors(req.res, 'the session with this id does not exist', 404);
    const user = await db.find(models.User, { id: session.userId });
    const workout = await db.find(models.Workout, { id: workoutId });
    if (!workout) return toolbox.errors(req.res, 'workout with id does not exist', 404);
    const data = await db.add(models.Routine, {
      sessionId,
      workoutId,
      numberOfSets,
      repsPerSet,
      status,
      weight,
    });
    data.session = session;
    data.session.user = user;
    data.workout = workout;
    return data;
  },

  async routineBySession(root, { sessionId, key }, { req, models }) {
    await toolbox.keyCheck(req, key);
    const data = await db.RoutineBySession(
      models.Routine,
      models.Workout,
      models.Category,
      models.Session,
      models.User,
      sessionId
    );
    return data;
  }
};

const analytics = {
  async addAnalytics(root, {
    routineId,
    setsCompleted,
    repsBreakdown,
    weightsBreakdown,
    bodyWeight,
    key,
  }, { req, models }) {
    await toolbox.keyCheck(req, key);
    const routine = await db.find(models.Routine, { id: routineId });
    if (repsBreakdown.length !== setsCompleted) return toolbox.errors(req.res, 'number of sets does not match reps breakdown', 400);
    if (weightsBreakdown.length !== setsCompleted) return toolbox.errors(req.res, 'number of sets does not match weight breakdown', 400);
    if (!routine) return toolbox.errors(req.res, 'the routine with this id does not exist', 404);
    const data = await db.add(models.Analytics, {
      routineId,
      setsCompleted,
      repsBreakdown,
      weightsBreakdown,
      bodyWeight,
    });
    data.routine = routine;
    return data;
  },

  async analyticsByRange(root, { from, to, key }, { req, models }) {
    await toolbox.keyCheck(req, key);
    const data = await db.getAnalyticsByRange(
      models.Analytics,
      models.Routine,
      models.Workout,
      models.Category,
      models.Session,
      models.User,
      { from, to }
    );
    return data;
  },
};

export {
  users,
  categories,
  workouts,
  sessions,
  routines,
  analytics,
};
