import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "The Horde", "img/projects/the_horde/main.png", `
        <div class="paragraph">
         <strong>The Horde</strong> was a week-long game jam project I worked on individually, centered around the theme "It's spreading." My take was straightforward: a zombie virus is spreading through an island population, and the player's objective is to eliminate as many zombies as possible before succumbing to the horde.
        </div>
        <div class="paragraph center">
            <img style="width: 100%" src="img/projects/the_horde/main.png"/>
        </div>
        <h2>Design</h2>
        <div class="paragraph">
            This game is an endless top-down shooter made in <strong>Unity</strong>, using assets acquired from <strong>Synty Studios</strong>. Because development time was limited, the focus was on providing a minimal feature set that was satisfying to use as part of the core game loop.
            There were 3 primary considerations:
            <ul>
                <li>Combat</li>
                <li>Horde Management</li>
                <li>Zombie AI</li>
            </ul>
        </div>

        <h3>Combat</h3>
        <div class="paragraph">
            Given that the game's objective is to eliminate as many zombies as possible, doing so needed to be an enjoyable experience. I tried to tune the experience in the way I provided visual feedback to the player, and in the decisions they could make.
            <br><br>

            <strong>Aiming:</strong>
            As a top-down shooter, the first challenge was providing the player an immersive means of understanding their aim direction. Another was ensuring that they could adequately assess the environment for threats - particularly in dark areas.
            I tackled both challenges simultaneously by having a flashlight attached to the player weapon. The flashlight's strength was balanced to allow enemies to get within a threatening distance of the player before being illuminated,
            but without being too close to avoid. The flashlight's broad angle, although useful for illuminating larger groups of enemies, also increased the challenge of aiming at distant enemies. This created the potential for skill growth, as the player could become more
            accurate at range with practice.
            <br><br>

            <strong>Weapons:</strong>
            There are two distinct weapons in the game: the Desert Eagle and the AK-47. Although the Desert Eagle has the firepower to take down almost any zombie with a single shot, it also has a lower rate of fire and a louder shot report than the AK-47.
            The AK-47 is fully automatic but requires 2-4 shots to eliminate a zombie.
            <br><br>

            <strong>Combat Feel:</strong>
            Because the horde is endless, weapons have unlimited ammunition. When a weapon is fired, a bullet trail is drawn at a random location along the line segment from the muzzle to the target location, giving the player additional feedback about their aim direction. A point light is used to simulate a muzzle flash, illuminating
            the player model and any nearby zombies. Zombies hit by a bullet produce exaggeratedly large blood-spatter effects from the impact point, and when a zombie "dies," it enters a ragdoll state. When in the ragdoll state, bullet impacts provide force impulses on the zombie,
            allowing the player to "blow them away," making it a very satisfying experience.
        </div>

        <h3>Horde Management</h3>
        <div class="paragraph">
            Managing the zombie horde requires 3 specific considerations: the "living," the "dead," and variety.
            <br><br>
            
            <strong>The living:</strong> The spawn manager ensures that there are always 50 zombies present in the environment, with the spawnable region being focused on the areas surrounding the player. To avoid
            seeing zombies spawn, valid spawn locations must be a minimum distance from the player. Additionally, to keep the action high, zombies that are too far from the player will automatically be despawned, freeing their "slot" from the 50 available. Effectively, the
            valid spawn zone is a donut that is centered on the player.
            <br><br>
            
            <strong>The dead:</strong> It wouldn't be satisfying for zombies to despawn immediately after they are eliminated, and it would break immersion. The spawn manager allows for a maximum of 10 dead zombies to be retained at any given time. This allows for the 
            visual effect of having defeated enemies present in the environment, without adding a significant strain on performance due to the dead zombies being in a ragdoll state (requiring more physics computation). These dead zombies are cleaned up in FIFO order, so the most
            recently eliminated enemies are guaranteed to provide a fun ragdoll experience.
            <br><br>

            <strong>Variety:</strong> There are 25 visually distinct zombies that can be spawned within the game. However, the spawn manager also randomly tweaks the statistical characteristics of every zombie. Their health, attack damage, and movement speed are all generated randomly
            within predefined ranges for each attribute. This effectively makes every zombie unique, and the player must be more cautious because there are no guarantees about how much a zombie will hurt them, how many shots will take them down, or how quickly they may be able to
            close a gap.
        </div>

        <h3>Zombie AI</h3>
        <div class="paragraph">
            As a rule, zombies are unintelligent creatures. This makes it easy to create a functional zombie AI using a very simple state machine approach, consisting of only a few states:
            <ul>
                <li>Wander - In this state, a zombie will pick a random nearby location to meander toward. Once that location is reached, it will do so again. If the zombie sees the player, or is shot, it will transition to the Chase state.</li>
                <li>Chase - In this state, a zombie will move after the player at its maximum speed. If it gets within melee range of the player, it will attack.</li>
                <li>Dead - When a zombie's health hits 0, it will enter the Dead state. It registers its death with the Spawn Manager and activates ragdoll for its model, then exits its state machine.</li>
            </ul>
        </div>
        <div class="paragraph center">
            <img style="width: 100%" src="img/projects/the_horde/death_cropped.png"/>
        </div>
        `, "#23bd69"),
        new ProjectData("project-2", "Epicenter", "img/projects/epicenter/main.png", `
            <div class="paragraph">
             <strong>Epicenter</strong> was a collaborative final project that I worked on for a game design course I took in graduate school. This atmospheric, zombie-survival FPS was designed and built in <strong>Unity</strong> over the course of about 4 weeks. Although the team consisted of a total of
             4 people, the vast majority of the work was performed by myself and one other individual.
            </div>

            <div class="paragraph center">
                <img style="width: 100%" src="img/projects/epicenter/menu.png"/>
            </div>
        
            <h2>Premise</h2>
            <div class="paragraph">
                Yesterday morning, everything was fine. Then - carrying patient zero of an unknown, highly contagious virus - the plane crashed. Now, this once-charming island city is the <strong>Epicenter</strong> of an outbreak that threatens to turn humanity into a mindless
                zombie hoard. The military has quarantined the island. The power plant has shut down. Communication with the outside world cannot be established. A small group of survivors takes refuge in the island's
                defensible police headquarters, but their generators are rapidly running out of fuel. Will they be overrun? Will the military raze the island to prevent the spread of the virus?
                <br><br>
                Venture beyond the safety of the HQ to acquire supplies and re-establish contact with the outside world in the hopes of salvation. Fight, flee, or sneak; the choice is yours.
                <br>The infected fear the light; take refuge in it.
                <br>They ravenously investigate disturbances; exploit it.
                <br>Help will arrive if you can just hold on.
            </div>

            <h2>My Contributions</h2>
            <div class="paragraph">
                I contributed substantially to this project, across almost every aspect of development:
                <ul>
                    <li>Core Frameworks</li>
                    <li>Zombie AI</li>
                    <li>Systemic Interaction</li>
                    <li>Aesthetic Design</li>
                </ul>
            </div>

            <h3>Core Frameworks</h3>
            <div class="paragraph">
                My largest contribution to the project is most likely the generic <strong>state machine framework</strong> that I developed. The menus, player controller, zombie AI, mission system, and core game state were all built upon this framework. It automatically handled
                initialization, integration into the core engine loop, and management of the current state, including initialization steps when a state transition occurred, along with cleanup of old state data. This flexibility made it very quick and easy to build the other systems,
                because the specializations for each system only required writing code that was specific to that system. This substantially reduced development effort, allowing us to focus on extending the feature set of the game.
                <br><br>
                In addition to the state machine framework, I was responsible for the core event system that we used to pass important information across the various game subsystems. An example of this is the propagation of sound events that may influence the zombie AI.
            </div>

            <h3>Zombie AI</h3>
            <div class="paragraph">
                Zombies have health, movement speed, attack damage, attack cooldown, and chase distance attributes that are randomly assigned when they are spawned into the game world. Because of this, each zombie is somewhat unique, but they all share the same behaviors.
                I built this behavior using my state machine framework, and it consists of several states:
                <ul>
                    <li>Idle</li>
                    <li>Wander</li>
                    <li>Investigate</li>
                    <li>Chase</li>
                    <li>Attack</li>
                    <li>Flee</li>
                    <li>Dead</li>
                </ul>

                <strong>Idle:</strong> In the Idle state, a zombie will remain stationary for a random time interval, after which it will transition to the Wander state. If the zombie hears a sound, it will transition to the Investigate state. If it sees the player, it will
                transition to the Chase state. If a light source is shone on it, it will transition to the Flee state, and if its health reaches 0, it will transition to the Dead state.
                <br><br>

                <strong>Wander:</strong> In the Wander state, a zombie selects a random location that is nearby and accessible to navigate toward. Upon reaching the location, it transitions into the Idle state. Should it hear a sound, it will Investigate.
                If it sees the player, it will Chase. Light shining on it will cause it to Flee, and if its health reaches 0, it will be Dead.
                <br><br>

                <strong>Investigate:</strong> In the Investigate state, a zombie will navigate toward the location of the sound that caught its interest, but at a speed higher than that of the Wander state. Zombies prioritize the most recent sound, so it may update its
                investigation location if it hears another sound. Again, seeing the player will cause it to give Chase, light will cause it to Flee, and it may end up Dead. If it reaches the investigation location without any other transition occurring, it will transition into the
                Idle state.
                <br><br>

                <strong>Chase:</strong> In the Chase state, a zombie will attempt to follow the player at its maximum speed. The player takes priority over sounds, so it will not transition into the Investigate state. However, the Flee state has higher precedence, so it
                will still transition to the Flee state if it encounters a light source. If the player gets too far away, it will transition to Idle. If it catches the player it will transition into the Attack state. Of course, if its health hits 0, then it will be Dead.
                <br><br>

                <strong>Attack:</strong> In the Attack state, a zombie will attack the player as fast as their cooldown will allow, dealing their allotted damage value. Should the player move out of attack range, the zombie will transition to the Chase state. A light source
                can cause it to Flee, and if it is killed, then it will be Dead.
                <br><br>

                <strong>Flee:</strong> The Flee state causes a zombie to run away from the light source(s) that are currently affecting it. The direction and distance that the zombie flees depends on the relative direction and brightness of the light source(s) involved, and
                is inspired by the concept of <strong>potential fields</strong> in robotics. While fleeing, a zombie could be killed, making it Dead. Otherwise, once it reaches its targeted flee location it will enter the Idle state.
                <br><br>

                <strong>Dead:</strong> A Dead zombie is dead. It registers its death with the Spawn Manager and sets its model into a ragdoll state.
            </div>

            <h3>Systemic Interaction</h3>
            <div class="paragraph">
                From the beginning of development, we wanted the gameplay systems to work together to produce interesting opportunities from moment to moment. We also wanted the player to interact directly with these systems and for them to reinforce the sense of overwhelming
                odds present in the game's narrative, while still allowing for creative ingenuity on the part of the player. The two gameplay systems that tie everything together are <strong>Light</strong> and <strong>Sound</strong>.
                <br><br>

                <strong>Light:</strong> The zombies have an aversion to light, which causes them to flee. Unfortunately, apart from the police HQ, consistent light sources are few and far between. This makes them beacons of safety and hope for the player, areas of respite between
                long stretches of zombie-controlled darkness.
            </div>
            <div class="paragraph center">
                <img style="width: 100%" src="img/projects/epicenter/beacon.png"/>
            </div>

            <div class="paragraph">
                <strong>Sound:</strong> Zombies will investigate auditory disturbances, and most player actions will create sounds that a zombie might hear depending on proximity and the volume of the sound.
                For example, shooting a zombie that's in your path might make your situation worse by attracting several nearby zombies to your location. The situation can quickly get out of hand if you're not careful!
                <br><br>

                <strong>Player Interaction:</strong> The player has many different methods of interacting with and exploiting the light and sound systems: the flashlight, flashbang grenades, fragmentation grenades, the flare gun, the weapon suppressors, and the all-important
                rock. Most of these items are accessed via the <strong>Equpment Wheel</strong> that I implemented.
            </div>
            <div class="paragraph center">
                <img style="width: 100%" src="img/projects/epicenter/wheel.png"/>
            </div>
            <div class="paragraph">
                The <strong>flashlight</strong> is a weapon attachment that gives the player the ability to silently deter zombies. However, the flashlight has a short range, and its battery drains rapidly. It can be recharged by repeatedly pressing the appropriate button,
                simulating the effect of a wind-up flashlight, and its battery won't drain while it's turned off. But if the battery drains completely, you won't be able to turn it back on until you've charged it fully! This can lead to some tense moments of resource management.
                <br><br>

                The <strong>flare gun</strong> creates a highly effective, temporary safe-zone wherever the flare lands. It's a powerful tool, but it requires some skill to accurately aim the flare because it's a physics-based projectile.
                <br><br>

                The <strong>flashbang grenade</strong> interacts with both the sound and lighting systems. Zombies caught in the flash will rapidly flee a large distance, but zombies can hear it from far away, too. So, it clears a sizable area of threats, but only until
                other zombies arrive to investigate the commotion. This can be used to intentionally group a large number of zombies together to make dispatching them more effective.
                <br><br>

                The <strong>fragmentation grenade</strong> is standard fare. It creates a loud, powerful explosion once it detonates, killing any zombies caught within the blast and sending them ragdolling outward. Combine it tactically with the flashbang to create a large group
                and eliminate them in one chaotic explosion!
                <br><br>

                The humble <strong>rock</strong> is a very useful distraction tool for stealth because it can be used to lure zombies from a short distance to its impact point, clearing a small path for the player to travel undetected.
                Plus, there's an infinite supply of rocks! Use it in combination with the Katana to create an opportunity for a silent melee takedown without risk of being attacked!
                <br><br>

                <strong>Weapon suppressors</strong> will dramatically reduce the volume of the game's firearms, but after a certain number of shots they become unusable. Their effectiveness and durability depend on the firearm they are equipped to. In general, the weaker firearm
                the quieter its shot report and the less damage it does, and lower damage weapons degrade the suppressor more slowly. The game provides 5 main weapons, each with different fire-rates, damage outputs, and report volume: the Glock, Desert Eagle, M-16, and AK-47, and SPAS-12.
            </div>

            <h3>Aesthetic Design</h3>
            <div class="paragraph">
                I was the driving force behind most of the game's visual aesthetic and sound design. Using Unity's VFX Graph and Shader Graph tools, I created the game's bullet sparks, blood spatters, flares, rain, fog, puddles, ocean, and fire barrels. To complement the constant
                rain, I made a simple system to handle random flashes of lightning and thunder. Examples of most of these visuals can be seen in the images below.
            </div>
            <div class="paragraph center">
                <img style="width: 100%" src="img/projects/epicenter/flare.png"/>
            </div>
            <div class="paragraph center">
                <img style="width: 100%" src="img/projects/epicenter/rain.png"/>
            </div>
            <div class="paragraph center">
                <img style="width: 100%" src="img/projects/epicenter/puddle.png"/>
            </div>
            <div class="paragraph center">
                <img style="width: 100%" src="img/projects/epicenter/ocean.png"/>
            </div>
            <div class="paragraph center">
                <img style="width: 100%" src="img/projects/epicenter/barrel.png"/>
            </div>
            <div class="paragraph center">
                <img style="width: 100%" src="img/projects/epicenter/main.png"/>
            </div>
            `, "#FF5722", false, true),
    new ProjectData("project-3", "Ray and Path Tracing", "img/projects/path_tracing/main.png", 
    `
    <div class="paragraph">
     I have a passion for computer graphics, particularly global illumination algorithms. I think there's something incredibly satisfying in seeing all of the mathematics performed by these algorithms transformed into a stunning image. Whether it's the Utah teapot, the Stanford bunny, or the Cornell box, each image is a thing of beauty; an amazing blend of art and science.
    </div>
    <div class="paragraph center">
        <img style="width: 100%" src="img/projects/path_tracing/main.png"/>
    </div>

    <div class="paragraph">
        This work began as a project for an advanced graphics course that I took as a graduate student, and I've continued to come back to it over time to add small improvements/features as time permits. The renderer is CPU-based and offline, serving primarily as a test bed for my own learning and to generate neat desktop backgrounds.
        <br><br>
        The project's initial incarnation was as a <strong>Distribution Ray Tracer</strong>, which enabled the following features:
        <ul>
            <li><strong>Anti-Aliasing</strong> via stratified sub-pixel rays.</li>
            <li><strong>Next Event Estimation</strong> of <strong>Area Lights</strong>, which allows for soft shadows.</li>
            <li><strong>Depth of Field</strong> by distributing camera-ray origins about a disk of finite area, instead of originating them from an infinitesimal pinhole.</li>
        </ul>
        <br>
        The project then evolved into a full <strong>Monte Carlo Path Tracer</strong>, dramatically improving render quality by simulating indirect lighting (left) and transmission/caustics (right).
        <br>
        <div class="center">
            <img style="width: 49%" src="img/projects/path_tracing/indirect.png"/>
            <img style="width: 49%" src="img/projects/path_tracing/caustics.png"/>
        </div>
        <br>
        Because all lighting calculations are performed in a linear, non-RGB space, the renders must be converted into RGB space before being output into an image format. The simplest method of doing so is to clamp the resulting values into RGB space, but this does not result in good image quality (left). Instead, the renders are <strong>Tone Mapped</strong> using a modified Reinhard technique, and a non-linear <strong>Gamma Correction</strong> is applied (right).
        <br>
        <div class="center">
            <img style="width: 49%" src="img/projects/path_tracing/raw_output_cropped.png"/>
            <img style="width: 49%" src="img/projects/path_tracing/tone_mapped_cropped.png"/>
        </div>
        <br>
        In addition to the perfectly Lambertian and Transmissive materials showcased so far, support was also implemented for the <strong>Cook-Torrance BRDF</strong> for basic physically based dielectric and metal materials.
        <br>
        <div class="center">
            <img style="width: 100%" src="img/projects/path_tracing/cook_torrance.png"/>
        </div>
        <br>
        Despite being an offline renderer, some effort was made to reduce required computation times:
        <ul>
            <li><strong>Boundary Volume Hierarchies</strong> were used to reduce the cost of ray intersection tests against high-poly models</li>
            <li>Images were decomposed into sets of 16x16 pixel tiles, and the tiles were rendered in parallel using multi-threading</li>
            <li><strong>Weighted Next Event Estimation</strong></li>
            <li><strong>Post-Process Filtering/Denoising</strong></li>
        </ul>

        For scenes with many light sources, performing Next Event Estimation across all light sources for every ray intersection is expensive. Instead, a single light source is randomly selected for NEE. However, variance can be reduced substantially faster by using a weighted random sampling for NEE, where the weight associated with a light source is its total luminance divided by the squared distance to the intersection point. Compare the first approach (left) using 576 rays per pixel to the second approach (right) using just 36 rays per pixel.
        <br>
        <div class="center">
            <img style="width: 49%" src="img/projects/path_tracing/many_light_576rpp.webp"/>
            <img style="width: 49%" src="img/projects/path_tracing/many_light_36rpp.webp"/>
        </div>
        <br>
        To reduce variance (denoise) in images with fewer rays per pixel, I implemented a post-process filter inspired by (and modified from) NVIDIA's <strong>Spatio-Temporal Variance-Guided Filter</strong>. It is an extension of a Bilateral Gaussian Blur, where localized blur strength across pixels is weighted based on deviation in luminance, material, world-space normal, and distance from the camera. The left image below is before denoising and the right image is after denoising. Because the denoising is a simple kernel function, it is very efficient.
        <br>
        <div class="center">
            <img style="width: 49%" src="img/projects/path_tracing/denoising_base.png"/>
            <img style="width: 49%" src="img/projects/path_tracing/denoising_ebf.png"/>
        </div>
    </div>
    `, "#5a78af", true, true),
    new ProjectData("project-4", "mARble Meltdown", "img/projects/marble_meltdown/score_bounds_cropped.png", `

    <style>
    * {
  box-sizing: border-box;
}

.row {
  display: flex;
}

/* Create three equal columns that sits next to each other */
.column {
  flex: 33.33%;
  padding: 5px;
}
    </style>
    
    <div class="paragraph">
     <strong>mARble Meltdown</strong> was a group project for a game design course I took as a graduate student, and my first ever game development project. It is an <strong>augmented reality</strong> Android application developed using <strong>Unity</strong> and <strong>AR Foundation</strong> over the course of 2 weeks.
    </div>

    <h2>Premise</h2>
    <div class="paragraph">
        Given the limited time-frame and the added complexity of it being an AR application, the gameplay mechanics are simple. The game is two-player, and each player has 5 turns. The objective is to shoot your marble from the end of the game board toward the larger
        "score" marble, attempting to land your marble as close to it as possible. All marbles are physics objects, so collisions can be used strategically to sabotage the other player. However, if a player knocks the "score" marble outside of its valid zone, they automatically lose
        the game!
        <br><br>

        While the core game concept was mine, I was also responsible for two primary aspects of the game:
        <ul>
            <li>User Interface</li>
            <li>Physics</li>
        </ul>
    </div>

    <h3>User Interface</h3>
    <div class="paragraph">
        To emphasize the AR nature of the application, the UI was integrated into the AR environment as much as possible. So, all primary menu options existed as elements in 3D space, tied to the game board, and billboarded to the camera to make interacting
        with them easier. This approach added to the novelty of the gameplay experience, since AR applications like this aren't encountered often. The left two images below show examples of the UI visualized to a player within the AR environment. The rightmost image
        shows how scoring information is displayed to the player during their turn, should they bring the camera close enough to the score marble.
    </div>
    <div class="row">
        <div class="column">
            <img style="width: 100%; height: 100%" src="img/projects/marble_meltdown/board_cropped.png"/>
        </div>

        <div class="column">
            <img style="width: 100%; height: 100%" src="img/projects/marble_meltdown/options_cropped.png"/>
        </div>

        <div class="column">
            <img style="width: 100%; height: 100%" src="img/projects/marble_meltdown/score_bounds_cropped.png"/>
        </div>
    </div>

    <h3>Physics</h3>
    <div class="paragraph">
        The physics of the game presented an interesting challenge, as originally I intended to use real-world measurements to set values for things like the mass of the marbles. However, Unity's physics engine is not well-suited to dealing with such small values for physics
        computations (each marble would only be a dozen or so grams). In particular, surface friction and drag could not be handled appropriately, causing the marbles to spin/slide indefinitely. The solution was to scale the size of the environment and physics simulation
         - the marbles are simulated at roughly the size of bowling balls - and then shrink the scale of the environment when rendering the AR scene. By calculating the masses using the approximate density of the real-world marbles, the resulting physics simulation reasonably
         approximated the feel of playing the game with a set of real marbles.
    </div>
    `, "#FF0099")
];